import fs from 'fs-extra'
// import { transformToNutritionFacts } from './helpers'
import { nutrientMappingUsdaToDb } from './lists'
import { Ingredient } from '../entity/Ingredient'
import { database } from './database'

export const loadData = async (rawDataPath) => {
  const rawData = JSON.parse(fs.readFileSync(rawDataPath, 'utf-8') || '{}')
  const nutrientData = {}
  await Promise.all(
    rawData.FoundationFoods.map(async (foundationFood) => {
      const nutrients: any = {}
      foundationFood.foodNutrients.map((foodNutrient) => {
        if (nutrientMappingUsdaToDb[foodNutrient.nutrient.name] && !!foodNutrient.amount) {
          switch (foodNutrient.nutrient.unitName) {
            case 'µg': {
              nutrients[nutrientMappingUsdaToDb[foodNutrient.nutrient.name]] = foodNutrient.amount
              break
            }
            case 'mg': {
              nutrients[nutrientMappingUsdaToDb[foodNutrient.nutrient.name]] = Math.round(foodNutrient.amount * 1e3)
              break
            }
            case 'g': {
              nutrients[nutrientMappingUsdaToDb[foodNutrient.nutrient.name]] = Math.round(foodNutrient.amount * 1e6)
              break
            }
          }
        }
      })
      if (!(await database.manager.count(Ingredient, { where: { description: foundationFood.description } }))) {
        let ingredient: Ingredient = new Ingredient()
        ingredient.description = foundationFood.description
        ingredient = Object.assign(ingredient, nutrients)
        await database.manager.save(ingredient)
      }
    }),
  )
  // const fdaData = transformToNutritionFacts(nutrientData)
}
