const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const msg = (title,icon) =>{
	return wx.showToast({
		duration:1500,
		mask:true,
		icon:icon?'success':'none',
		title:title
	})
}
const phone = (value)=> /(^1(3|4|5|6|7|8|9)\d{9}$)/.test(value) //手机号正则表达式
const email = (value)=> /(^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$)/.test(value) //邮箱正则表达式
module.exports = {
  formatTime: formatTime,
  msg:msg,
  phone:phone,
  email:email
}
