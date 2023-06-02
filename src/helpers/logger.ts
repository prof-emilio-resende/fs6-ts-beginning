function loggerBuilder(prefix: string): (txt: string) => void {
    return (txt) => console.log(`${prefix}:: ${txt}`)
}

export default loggerBuilder