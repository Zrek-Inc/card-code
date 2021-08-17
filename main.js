/*!
 * 株式会社Zrek / Zrek Inc.
 * https://z-rek.com
 *
 * Date: 2021/08/17
 * Copyright © 2021 Zrek inc. All Rights Reserved.
 */


window.onload = function(){
$.getJSON(jsonFile, (data) => {
  $('#key_number').html(data.key_number)
  $('#unit_kg_co2').html(data.unit)
  $('#name').html(data.username)
  $('#date').html(data.good_thru)
  $('#button').attr("href", data.url)
})
}
