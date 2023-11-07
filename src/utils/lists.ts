// FDA daily values based on a 2000 calorie diet
// Units for daily values are as per FDA guidelines
export const fdaDailyValues = {
  added_sugars: 50, // g
  biotin: 30, // μg
  calcium: 1300, // mg
  chloride: 2300, // mg
  choline: 550, // mg
  cholesterol: 300, // mg
  chromium: 35, // μg
  copper: 0.9, // mg
  dietary_fiber: 28, // g
  fat: 78, // g
  folate_folic_acid: 400, // μg
  iodine: 150, // μg
  iron: 18, // mg
  magnesium: 420, // mg
  manganese: 2.3, // mg
  molybdenum: 45, // μg
  niacin: 16, // mg
  pantothenic_acid: 5, // mg
  phosphorus: 1250, // mg
  potassium: 4700, // mg
  protein: 50, // g
  riboflavin: 1.3, // mg
  saturated_fat: 20, // g
  selenium: 55, // μg
  sodium: 2300, // mg
  thiamin: 1.2, // mg
  total_carbohydrate: 275, // g
  vitamin_a: 900, // μg
  vitamin_b6: 1.7, // mg
  vitamin_b12: 2.4, // μg
  vitamin_c: 90, // mg
  vitamin_d: 20, // μg
  vitamin_e: 15, // mg
  vitamin_k: 120, // μg
  zinc: 11, // mg
}

export const nutrientMappingDbToFda = {
  added_sugars: 'Added sugars',
  biotin: 'Biotin',
  calcium: 'Calcium',
  chloride: 'Chloride',
  choline: 'Choline',
  cholesterol: 'Cholesterol',
  chromium: 'Chromium',
  copper: 'Copper',
  dietary_fiber: 'Dietary Fiber',
  fat: 'Fat',
  folate_folic_acid: 'Folate/Folic Acid',
  iodine: 'Iodine',
  iron: 'Iron',
  magnesium: 'Magnesium',
  manganese: 'Manganese',
  molybdenum: 'Molybdenum',
  niacin: 'Niacin',
  pantothenic_acid: 'Pantothenic Acid',
  phosphorus: 'Phosphorus',
  potassium: 'Potassium',
  protein: 'Protein',
  riboflavin: 'Riboflavin',
  saturated_fat: 'Saturated fat',
  selenium: 'Selenium',
  sodium: 'Sodium',
  thiamin: 'Thiamin',
  total_carbohydrate: 'Total carbohydrate',
  vitamin_a: 'Vitamin A',
  vitamin_b6: 'Vitamin B6',
  vitamin_b12: 'Vitamin B12',
  vitamin_c: 'Vitamin C',
  vitamin_d: 'Vitamin D',
  vitamin_e: 'Vitamin E',
  vitamin_k: 'Vitamin K',
  zinc: 'Zinc',
}

export const nutrientMappingUsdaToDb = {
  'Added sugars': 'added_sugars',
  'Biotin, B': 'biotin',
  'Calcium, Ca': 'calcium',
  'Chloride, Cl': 'chloride',
  Choline: 'choline',
  Cholesterol: 'cholesterol',
  'Chromium, Cr': 'chromium',
  'Copper, Cu': 'copper',
  'Fiber, total dietary': 'dietary_fiber',
  'Total lipid (fat)': 'fat',
  'Folate/Folic Acid': 'folate_folic_acid',
  'Iodine, I': 'iodine',
  'Iron, Fe': 'iron',
  'Magnesium, Mg': 'magnesium',
  'Manganese, Mn': 'manganese',
  'Molybdenum, Mo': 'molybdenum',
  Niacin: 'niacin',
  'Pantothenic Acid': 'pantothenic_acid',
  'Phosphorus, P': 'phosphorus',
  'Potassium, K': 'potassium',
  Protein: 'protein',
  Riboflavin: 'riboflavin',
  'Fatty acids, total saturated': 'saturated_fat',
  'Selenium, Se': 'selenium',
  'Sodium, Na': 'sodium',
  Thiamin: 'thiamin',
  'Carbohydrate, by difference': 'total_carbohydrate',
  'Vitamin A': 'vitamin_a',
  'Vitamin B-6': 'vitamin_b6',
  'Vitamin B-12': 'vitamin_b12',
  'Vitamin C': 'vitamin_c',
  'Vitamin D': 'vitamin_d',
  'Vitamin E': 'vitamin_e',
  'Vitamin K': 'vitamin_k',
  'Zinc, Zn': 'zinc',
}
