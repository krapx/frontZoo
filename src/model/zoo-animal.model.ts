export interface ZooAnimalModel {
    active_time: string | "",
    animal_type: string | "",
    diet: string | "",
    geo_range: string | "",
    habitat: string | "",
    id: string | "",
    image_link: string | "",
    latin_name: string | "",
    length_max: number | 20,
    length_min: number | 1,
    lifespan: string | "",
    name: string | "",
    weight_max: number | 20,
    weight_min: number | 1
}