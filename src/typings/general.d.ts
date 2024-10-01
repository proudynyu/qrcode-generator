type Mode = "alpha"|"byte"|"numeric"|"kanji"

type ErrorLevel = "L"|"M"|"Q"|"H"

type CapacitiesProps = {
    numeric: number
    alphanumeric: number
    byte: number
    kanji: number
}

type VersionProp = {
    version: number
    L: CapacitiesProps
    M: CapacitiesProps
    Q: CapacitiesProps
    H: CapacitiesProps
}
