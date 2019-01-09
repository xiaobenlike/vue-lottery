const result = []
for (let i = 1; i < 100; i++) {
  result.push({
    HeadImg: `@image(200x200, @color, #FFF, mock-${i})`, // 微信头像
    Name: i, // 姓名
    Award: '0' // 奖项，'0'表示未中奖
  })
}
export default result
