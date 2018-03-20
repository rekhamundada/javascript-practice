function isAnagram(test, original){
  test = test.toLowerCase();
  original = original.toLowerCase();

  var str1 = test.split('').sort().join('');
  var str2 = original.split('').sort().join('');

   str1 = str1.replace(/[^a-z0-9]/g, '');
   str2 = str2.replace(/[^a-z0-9]/g, '');

  if (str1 === str2) return true;
  return false;
}
isAnagram("William Shakespeare","I am a weakish speller")
//isAnagram("Silent","Listen")
//isAnagram("car","cat")
//if(a.equalsIgnoreCase(b)){

