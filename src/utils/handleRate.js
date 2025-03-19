import { commentList } from "../datas/commentData";

export const caculateRate = () => {
    const totalRate = commentList.reduce((total, e) => total + e.rate, 0)
    return totalRate / commentList.length
}
export const caculatePercent = ({ commentList, n }) => {
    let sum = 0;
    commentList.forEach((e) => {
        if (e.rate === n) {
            sum += 1
        }
    })
    const percent = (sum / commentList.length) * 100;
    return percent;
}

export const getAllImageComment = (commentList) => {
    const imageList = commentList.flatMap((comment) => comment.imageList);
    return imageList;
}
// exports = { caculatePercent, caculateRate }