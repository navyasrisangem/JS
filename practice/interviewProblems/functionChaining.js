function Validate(str) {
    var name = "";
    return {
        required: function () {
            if (str === "") {
                console.log("username required");
            }
            return this;   //required function gets added into the memory of validate function so that chaining is possible.
        },
        minlength: function (val) {
            if (str.length < val) {
                console.log("name too short");
            } else {
                name = str;
            }
            return this;    //minlength function gets added into the memory of validate function so that chaining is possible.
        },
        print: function () {
            console.log(str);
            return this;
        }
    }
}
Validate("nav").required().minlength(4).print();
