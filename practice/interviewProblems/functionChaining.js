let username = prompt("enter your name");
function Validate(username) {
     return {
        required : function() {
            if(!username) {
              alert("username required")
            }
        },
        minlength : function(val) {
             if(username.length < 4) {
                alert("minimum length is 4 characters");
             }
        }
     }
}
Validate(null).required().minlength(4);