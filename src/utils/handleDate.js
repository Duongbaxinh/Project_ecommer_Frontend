export const convertDateToString = (timestamp) => {
    const date = new Date(timestamp)
    return `${date.getDay() < 10 ? '0' + date.getDay() : date.getDay()}-${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}-${date.getFullYear()}`
}
const caculateLongDayComment = (timestamp) => {
    const dateNow = new Date().getTime();
    const dateLong = dateNow - timestamp;
    const date = new Date(dateLong)

}
