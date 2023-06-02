import logger from './helpers/logger'

const myLogger = logger('tscLog')

function main(): void {
    myLogger('Ola mundo tsc!')

    let text = "string"
    let text2: string = text
    const integer: number = 10
    const integer_implicit = 10
    const decimal: number = 10.00
    const arr_str: string[] = []
    const dictionary: Record<string, number> = {
        "key-11": 1,
        "key-2": 2
    }

    myLogger(typeof(text))
    myLogger(typeof(arr_str))
    myLogger(Object.getPrototypeOf(arr_str).constructor.name)

    myLogger(`${arr_str instanceof Array}`)
}

main()
