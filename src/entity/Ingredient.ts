import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn({ name: 'id' })
  id!: number

  @Column('text', { name: 'description', nullable: false })
  description!: string

  @Column('integer', { name: 'added_sugars', nullable: false, default: () => '0' })
  added_sugars: number | undefined

  @Column('integer', { name: 'biotin', nullable: false, default: () => '0' })
  biotin: number | undefined

  @Column('integer', { name: 'calcium', nullable: false, default: () => '0' })
  calcium: number | undefined

  @Column('integer', { name: 'chloride', nullable: false, default: () => '0' })
  chloride: number | undefined

  @Column('integer', { name: 'choline', nullable: false, default: () => '0' })
  choline: number | undefined

  @Column('integer', { name: 'cholesterol', nullable: false, default: () => '0' })
  cholesterol: number | undefined

  @Column('integer', { name: 'chromium', nullable: false, default: () => '0' })
  chromium: number | undefined

  @Column('integer', { name: 'copper', nullable: false, default: () => '0' })
  copper: number | undefined

  @Column('integer', { name: 'dietary_fiber', nullable: false, default: () => '0' })
  dietary_fiber: number | undefined

  @Column('integer', { name: 'fat', nullable: false, default: () => '0' })
  fat: number | undefined

  @Column('integer', { name: 'folate_folic_acid', nullable: false, default: () => '0' })
  folate_folic_acid: number | undefined

  @Column('integer', { name: 'iodine', nullable: false, default: () => '0' })
  iodine: number | undefined

  @Column('integer', { name: 'iron', nullable: false, default: () => '0' })
  iron: number | undefined

  @Column('integer', { name: 'magnesium', nullable: false, default: () => '0' })
  magnesium: number | undefined

  @Column('integer', { name: 'manganese', nullable: false, default: () => '0' })
  manganese: number | undefined

  @Column('integer', { name: 'molybdenum', nullable: false, default: () => '0' })
  molybdenum: number | undefined

  @Column('integer', { name: 'niacin', nullable: false, default: () => '0' })
  niacin: number | undefined

  @Column('integer', { name: 'pantothenic_acid', nullable: false, default: () => '0' })
  pantothenic_acid: number | undefined

  @Column('integer', { name: 'phosphorus', nullable: false, default: () => '0' })
  phosphorus: number | undefined

  @Column('integer', { name: 'potassium', nullable: false, default: () => '0' })
  potassium: number | undefined

  @Column('integer', { name: 'protein', nullable: false, default: () => '0' })
  protein: number | undefined

  @Column('integer', { name: 'riboflavin', nullable: false, default: () => '0' })
  riboflavin: number | undefined

  @Column('integer', { name: 'saturated_fat', nullable: false, default: () => '0' })
  saturated_fat: number | undefined

  @Column('integer', { name: 'selenium', nullable: false, default: () => '0' })
  selenium: number | undefined

  @Column('integer', { name: 'sodium', nullable: false, default: () => '0' })
  sodium: number | undefined

  @Column('integer', { name: 'thiamin', nullable: false, default: () => '0' })
  thiamin: number | undefined

  @Column('integer', { name: 'total_carbohydrate', nullable: false, default: () => '0' })
  total_carbohydrate: number | undefined

  @Column('integer', { name: 'vitamin_a', nullable: false, default: () => '0' })
  vitamin_a: number | undefined

  @Column('integer', { name: 'vitamin_b6', nullable: false, default: () => '0' })
  vitamin_b6: number | undefined

  @Column('integer', { name: 'vitamin_b12', nullable: false, default: () => '0' })
  vitamin_b12: number | undefined

  @Column('integer', { name: 'vitamin_c', nullable: false, default: () => '0' })
  vitamin_c: number | undefined

  @Column('integer', { name: 'vitamin_d', nullable: false, default: () => '0' })
  vitamin_d: number | undefined

  @Column('integer', { name: 'vitamin_e', nullable: false, default: () => '0' })
  vitamin_e: number | undefined

  @Column('integer', { name: 'vitamin_k', nullable: false, default: () => '0' })
  vitamin_k: number | undefined

  @Column('integer', { name: 'zinc', nullable: false, default: () => '0' })
  zinc: number | undefined
}
