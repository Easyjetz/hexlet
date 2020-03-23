function Point(width, height) {
    this.x = width;
    this.y = height;
}

function Segment(point1, point2) {
    this.beginPoint = point1;
    this.endPoint = point2;
}

const reverse = segment => {
    const {beginPoint, endPoint} = segment
    const start = new Point(endPoint.x, endPoint.y);
    const end = new Point(beginPoint.x, beginPoint.y);
    const segm = new Segment(start, end)
    return segm;
}

const point1 = new Point(1, 10);
const point2 = new Point(11, -3);
const segment = new Segment(point1, point2);
const reversedSegment = reverse(segment);
console.log(reversedSegment);