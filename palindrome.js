<html>
<head>
  <script type="text/javascript">
    function palindrome(str){
      const len=str.length;
      for(let i=0;i<len/2;i++){
        if(str[i]!=string1[len-1-i])
        {
          return("This Is Not A Palindrome");
        }
      }
      return("This Is A Palindrome");
    }
  </script>
</head>
<body>

  <script>
var string1=prompt("Enter The String");
var ans =palindrome(string1);
document.write(ans);
  </script>
</body>
</html>
