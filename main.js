/*!
 * 株式会社Zrek / Zrek Inc.
 * https://z-rek.com
 *
 * Date: 2021/08/17
 * Copyright © 2021 Zrek inc. All Rights Reserved.
 */


window.onload = function(){
$.getJSON('data.json', (data) => {
  $('#key_number').html(data[0].key_number)
  $('#unit_kg_co2').html(data[0].unit)
  $('#name').html(data[0].username)
  $('#date').html(data[0].good_thru)
  $('#button').attr("href", data[0].url)
})
}
