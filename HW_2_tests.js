// http://162.55.220.72:5005/first
// 1. Отправить запрос.
// 2. Статус код 200

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 3. Проверить, что в body приходит правильный string.

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("This is the first responce from server!ss");
});

// http://162.55.220.72:5005/user_info_3
    // 1. Отправить запрос.
    // 2. Статус код 200

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 3. Спарсить response body в json.
    
    var jsonData = pm.response.json();
    var resp_name = jsonData.name;
       console.log("Req_name = ", resp_name)

// 4. Проверить, что name в ответе равно name s request (name вбить руками.)

    pm.test("Req_Resp_NAME_check", function () {
        pm.expect(resp_name).to.eql("Nastya");
        });

    // 5. Проверить, что age в ответе равно age s request (age вбить руками.)

    var jsonData = pm.response.json();
    var resp_age = jsonData.age;
         console.log("Req_age = ", + resp_age)
    pm.test("Req_Resp_AGE_check", function () {
        pm.expect(resp_age).to.eql("29");
        });

    // 6. Проверить, что salary в ответе равно salary s request (salary вбить руками.)

    var jsonData = pm.response.json();
    var resp_salary = jsonData.salary;
      console.log("Req_salary = ", resp_salary)
    pm.test("Req_Resp_SALARY_check", function () {
        pm.expect(resp_salary).to.eql(500);
        });

    // 7. Спарсить request.
    // 8. Проверить, что name в ответе равно name s request (name забрать из request.)
    
    var jsonData = pm.response.json();
    var resp_name = jsonData.name;
    var req = request.data;
    var req_name = req.name;
  
    console.log("Resp_name = ", resp_name)
    console.log("Req_name = ", req_name)

    pm.test("Req_Resp_NAME_check", function () {
        pm.expect(resp_name).to.eql(req_name);
        });

// 9. Проверить, что age в ответе равно age s request (age забрать из request.)

    var jsonData = pm.response.json();

    var resp_age = jsonData.age;
    var req = request.data;
    var req_age = req.age;

    console.log("Resp_age = ", + resp_age)
    console.log("Req_age = ", + req_age)

    pm.test("Req_Resp_AGE_check", function () {
        pm.expect(resp_age).to.eql(req_age);
        });

// 10. Проверить, что salary в ответе равно salary s request (salary забрать из request.)

    var jsonData = pm.response.json();

    var resp_salary = jsonData.salary;
    var req = request.data;
    var req_salary = + req.salary;

    console.log("Resp_salary = ", resp_salary)
    console.log("Req_salary = ", req_salary)

    pm.test("Req_Resp_SALARY_check", function () {
        pm.expect(resp_salary).to.eql(req_salary);
        });

// 11. Вывести в консоль параметр family из response.

 var jsonData = pm.response.json();

    var resp_family = jsonData.family;
    
    console.log("Resp_family = ", resp_family)

// 12. Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)

 var jsonData = pm.response.json();
    console.log("jsonData = ", jsonData)

    var resp_salary = jsonData.family.u_salary_1_5_year;
    var req_salary = request.data.salary*4;
  
    console.log("Resp_salary = ", resp_salary)
    console.log("u_salary_1_5_year = ", req_salary)
   
    pm.test("u_salary_1_5_year_check", function () {
        pm.expect(resp_salary).to.eql(req_salary);
        });

// http://162.55.220.72:5005/object_info_3
// 1. Отправить запрос.
// 2. Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 3. Спарсить response body в json.
// 4. Спарсить request.

    const responseJson = pm.response.json();
    var resp_name = responseJson.name;
    
    var req_name = pm.request.url.query.toObject().name;

// 5. Проверить, что name в ответе равно name s request (name забрать из request.)

    console.log("Resp_name = ", resp_name)
    console.log("Req_name = ", req_name)

    pm.test("Req_Resp_NAME_check", function () {
        pm.expect(resp_name).to.eql(req_name);
        });

// 6. Проверить, что age в ответе равно age s request (age забрать из request.)

    var jsonData = pm.response.json();
    var resp_age = responseJson.age;
    var req_age = pm.request.url.query.toObject().age;

    console.log("Resp_age = ", resp_age)
    console.log("Req_age = ", req_age)

    pm.test("Req_Resp_AGE_check", function () {
        pm.expect(resp_age).to.eql(req_age);
        });

    // 7. Проверить, что salary в ответе равно salary s request (salary забрать из request.)

    var jsonData = pm.response.json();
    var resp_salary = responseJson.salary;
    var req_salary = pm.request.url.query.toObject().salary;

    console.log("Resp_salary = ", + resp_salary)
    console.log("Req_salary = ", + req_salary)

    pm.test("Req_Resp_SALARY_check", function () {
        pm.expect(+ resp_salary).to.eql(+ req_salary);
        });

    // 8. Вывести в консоль параметр family из response.

    var jsonData = pm.response.json();
    var resp_family = responseJson.family;
    console.log("Resp_family = ", resp_family)

// 9. Проверить, что у параметра dog есть параметры name.

pm.test("Dog_have_name", () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson.family.pets.dog).to.have.property("name");
  });

// 10. Проверить, что у параметра dog есть параметры age.

pm.test("Dog_have_age", () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson.family.pets.dog).to.have.property("age");
  });

// 11. Проверить, что параметр name имеет значение Luky.
pm.test("Dog_have_name_Luky", () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson.family.pets.dog.name).to.eql("Luky");
  });

// 12. Проверить, что параметр age имеет значение 4.

pm.test("Dog_have_age_4", () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson.family.pets.dog.age).to.eql(4);
  });
  
  // http://162.55.220.72:5005/object_info_3
// 1. Отправить запрос.
// 2. Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 3. Спарсить response body в json.
// 4. Спарсить request.

    const responseJson = pm.response.json();
    var resp_name = responseJson.name;
    var req_name = pm.request.url.query.toObject().name;

// 5. Проверить, что name в ответе равно name s request (name забрать из request.)

    console.log("Resp_name = ", resp_name)
    console.log("Req_name = ", req_name)

    pm.test("Req_Resp_NAME_check", function () {
        pm.expect(resp_name).to.eql(req_name);
        });

// 6. Проверить, что age в ответе равно age s request (age забрать из request.)

    var jsonData = pm.response.json();
    var resp_age = responseJson.age;
    var req_age = pm.request.url.query.toObject().age;

    console.log("Resp_age = ", + resp_age)
    console.log("Req_age = ", + req_age)

    pm.test("Req_Resp_AGE_check", function () {
        pm.expect(+ resp_age).to.eql(+ req_age);
        });

// 7. Вывести в консоль параметр salary из request.

    var jsonData = pm.response.json();
    var req_salary = pm.request.url.query.toObject().salary;

    console.log("Req_salary = ", + req_salary)

// 8. Вывести в консоль параметр salary из response.  
var jsonData = pm.response.json();
var resp_salary = responseJson.salary;

console.log("Resp_salary = ", resp_salary)

// 9. Вывести в консоль 0-й элемент параметра salary из response.

var jsonData = pm.response.json();
var resp_salary = responseJson.salary;

console.log("Resp_salary_0 = ", resp_salary[0])

// 10. Вывести в консоль 1-й элемент параметра salary параметр salary из response.

var jsonData = pm.response.json();
var resp_salary = responseJson.salary;

console.log("Resp_salary_1 = ", resp_salary[1])

// 11. Вывести в консоль 2-й элемент параметра salary параметр salary из response.

var jsonData = pm.response.json();
var resp_salary = responseJson.salary;

console.log("Resp_salary_2 = ", resp_salary[2])

// 12. Проверить, что 0-й элемент параметра salary равен salary из request (salary забрать из request.)

var jsonData = pm.response.json();
var resp_salary = responseJson.salary;
var req_salary = pm.request.url.query.toObject().salary;

console.log("Resp_salary_0 = ", resp_salary[0])
console.log("Req_salary = ", + req_salary)

 pm.test("SALARY_0_check", function () {
pm.expect(resp_salary[0]).to.eql(+ req_salary);
});

// 13. Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request.)

var jsonData = pm.response.json();
var resp_salary = responseJson.salary;
var req_salary = pm.request.url.query.toObject().salary;

console.log("Resp_salary_1 = ", + resp_salary[1])
console.log("Req_salary = ", req_salary*2)

 pm.test("SALARY_1_check", function () {
pm.expect(+ resp_salary[1]).to.eql(req_salary*2);
});

// 14. Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request.)

var jsonData = pm.response.json();
var resp_salary = responseJson.salary;
var req_salary = pm.request.url.query.toObject().salary;

console.log("Resp_salary_2 = ", + resp_salary[2])
console.log("Req_salary = ", req_salary*3)

 pm.test("SALARY_2_check", function () {
pm.expect(+ resp_salary[2]).to.eql(req_salary*3);
});

// 15. Создать в окружении переменную name
pm.environment.set("name");

// 16. Создать в окружении переменную age
pm.environment.set("age");

// 17. Создать в окружении переменную salary
pm.environment.set("salary");

// 18. Передать в окружение переменную name
pm.environment.set("name");

// 19. Передать в окружение переменную age
pm.environment.set("age");

// 20. Передать в окружение переменную salary
pm.environment.set("salary");

// 21. Написать цикл который выведет в консоль по порядку элементы списка из параметра salary.

var jsonData = pm.response.json();
var resp_salary = responseJson.salary;
console.log("Resp_salary = ", resp_salary)

let i = 0;
while (i < resp_salary.length) {
    console.log(resp_salary[i])
    i++
}


