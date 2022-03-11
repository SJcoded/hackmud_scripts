function ( a , { t } )
{// t:#s.name.loc
  var c = { } , p , v , r , x , s , i = 0 ,
  P = "red0purple0blue0cyan0green0lime0yellow0orange020305070110130170190230290310370410430470530590610670710730790830890970unlock0open0release" . split ( 0 ) ,
  z = "_..!|1!|2!|3!|or n|d c| com|k c|color_digit|c002_complement|c003_triad_1|c003_triad_2|!d|t d|pr",
  Z = z . split ( '|' )
  
  for ( ; v = ( r = t . call ( c ) ) . match ( z ) ; c [ p ] = x , i ++ ) 
  s = Z . indexOf ( v = v [ 0 ] ) ,
  s > 13 ? c . ez_prime = + P [ i % 25 + 8 ]  :
  s > 11 ? c . digit = i%10:
  s > 8 ? p = v :
  s > 7 ? c [ v ] = x.length :
  x = s > 6 ? P [ i % 3 + 33 ] :
  s > 3 ? P [ i % 8 ] :
  p = s > 0 ? "c00" + v [ 0 ]  :
  "EZ_" + v [ 1 ] + v [ 2 ]
  
  return r
}