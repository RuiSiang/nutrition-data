// import { fdaDailyValues } from './lists'

// export const transformToNutritionFacts = (nutritionData: { [key: string]: string }) => {
//   // Helper function to calculate daily value percentage
//   function calcDailyValue(amount: number, nutrient: string) {
//     if (!fdaDailyValues[nutrient]) {
//       return null // If no daily value is defined, return null
//     }
//     return ((amount / fdaDailyValues[nutrient]) * 100).toFixed(2)
//   }

//   // Transform the nutrition data
//   const transformed = {}
//   Object.keys(nutritionData).forEach((category) => {
//     transformed[category] = {}
//     Object.keys(nutritionData[category]).forEach((nutrient) => {
//       const amount = parseFloat(nutritionData[category][nutrient])
//       const unit = nutritionData[category][nutrient].replace(/[0-9.-]/g, '').trim()
//       const fdaNutrientName = nutrientMappingRaw[nutrient] || nutrient
//       const dailyValue = calcDailyValue(amount, fdaNutrientName)
//       if (dailyValue) {
//         transformed[category][fdaNutrientName] = {
//           'Amount per serving': `${amount} ${unit}`,
//           'Daily Value %': `${dailyValue}%`,
//         }
//       }
//     })
//   })

//   return transformed
// }
