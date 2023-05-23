// 1) необходимо залогиниться
// POST
// http://162.55.220.72:5005/login
// login : str (кроме /)
// password : str

// Приходящий токен необходимо передать во все остальные запросы.

var jsonData = pm.response.json();
var resp_token = jsonData.token
 
console.log(resp_token)
pm.environment.set("token", resp_token);

// 1) Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2) Проверка структуры json в ответе.

const jsonData = pm.response.json();
pm.test("Test data type of the response", () => {
  pm.expect(jsonData).to.be.an("object");
  pm.expect(jsonData.start_qa_salary).to.be.a("number");
  pm.expect(jsonData.qa_salary_after_6_months).to.be.a("number");
  pm.expect(jsonData.qa_salary_after_12_months).to.be.a("number");
  pm.expect(jsonData.person).to.be.an("object");
  pm.expect(jsonData.person.u_name).to.be.an("array");
  pm.expect(jsonData.person.u_age).to.be.a("number");
  pm.expect(jsonData.person["u_salary_1_5_year"]).to.be.a("number");
});

var schema = {
    "person": {
        "u_age": 29,
        "u_name": [
            "Nastya",
            500,
            29
        ],
        "u_salary_1_5_year": 2000
    },
    "qa_salary_after_12_months": 1450.0,
    "qa_salary_after_6_months": 1000,
    "start_qa_salary": 500
}

var data1 = [true, false];
var data2 = [true, 123];

pm.test('Schema is valid', function () {
    pm.expect(tv4.validate(data1, schema)).to.be.true;
    pm.expect(tv4.validate(data2, schema)).to.be.true;
});

// 3) В ответе указаны коэффициенты умножения salary, напишите тесты по проверке правильности результата перемножения на коэффициент.

pm.test("coefficient_check", function () {
    var jsonData = pm.response.json();
    var req_raw_json = JSON.parse(pm.request.body.raw)
    var req_salary = req_raw_json.salary;
    pm.expect(req_salary*2).to.eql(jsonData.qa_salary_after_6_months);
});

// 4) Достать значение из поля 'u_salary_1.5_year' и передать в поле salary запроса http://162.55.220.72:5005/get_test_user

var jsonData1 = pm.response.json();
var resp_salary = jsonData1.person["u_salary_1_5_year"];
 console.log("Resp_salary", resp_salary);
pm.sendRequest(`http://162.55.220.72:5005/get_test_user?u_salary_1_5_year=${resp_salary}`, function (err, res) {
    console.log(pm.response.json());
});

// 1) Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2) Проверка структуры json в ответе.

var schema = {
    "age": 29,
    "name": "Nastya",
    "salary": [
        500,
        "1000",
        "1500"
    ]
};

var data1 = [true, false];
var data2 = [true, 123];

pm.test('Schema is valid', function () {
    pm.expect(tv4.validate(data1, schema)).to.be.true;
    pm.expect(tv4.validate(data2, schema)).to.be.true;
});

// 3) В ответе указаны коэффициенты умножения salary, напишите тесты по проверке правильности результата перемножения на коэффициент.

pm.test("coefficient_2_check", function () {
    var jsonData = pm.response.json();
    var req_salary = request.data.salary;
    var resp_salary = jsonData.salary;
    pm.expect(+ req_salary*2).to.eql(+ resp_salary[1]);
console.log("Req_salary =", req_salary);
console.log("Resp_salary =", resp_salary);
});

pm.test("coefficient_3_check", function () {
    var jsonData = pm.response.json();
    var req_salary = request.data.salary;
    var resp_salary = jsonData.salary;
    pm.expect(+ req_salary*3).to.eql(+ resp_salary[2]);
console.log("Req_salary =", req_salary);
console.log("Resp_salary =", resp_salary);
});

// 4) проверить, что 2-й элемент массива salary больше 1-го и 0-го

pm.test("arr_check", function () {
    var jsonData = pm.response.json();
    var resp_salary = jsonData.salary;
    pm.expect((+ resp_salary[2] > +resp_salary[1])&&(+resp_salary[2] > +resp_salary[1])).to.be.true;
console.log("Resp_salary =", resp_salary);
});

// 1) Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2) Проверка структуры json в ответе.

var schema = {
    "age": "29",
    "family": {
        "children": [
            [
                "Alex",
                24
            ],
            [
                "Kate",
                12
            ]
        ],
        "u_salary_1_5_year": 2000
    },
    "name": "Nastya",
    "salary": 500
};

var data1 = [true, false];
var data2 = [true, 123];

pm.test('Schema is valid', function () {
    pm.expect(tv4.validate(data1, schema)).to.be.true;
    pm.expect(tv4.validate(data2, schema)).to.be.true;
});

// 3) Проверить что занчение поля name = значению переменной name из окружения

    var jsonData = pm.response.json();

    var resp_name = jsonData.name;
    var req_name = request.data.name;
   
    console.log("Resp_name = ", resp_name)
    console.log("Req_name = ", req_name)

    pm.test("Req_Resp_NAME_check", function () {
        pm.expect(resp_name).to.eql(req_name);
        });

    // 4) Проверить что занчение поля age в ответе соответсвует отправленному в запросе значению поля age

    var jsonData = pm.response.json();

    var resp_age = jsonData.age;
    var req_age = request.data.age;
   
    console.log("Resp_age = ", resp_age)
    console.log("Req_age = ", req_age)

    pm.test("Req_Resp_AGE_check", function () {
        pm.expect(resp_age).to.eql(req_age);
        });
		
		// 1) Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 2) Проверка структуры json в ответе.

var schema = {
    "age": 29,
    "daily_food": 0.72,
    "daily_sleep": 150.0,
    "name": "Nastya"
};

var data1 = [true, false];
var data2 = [true, 123];

pm.test('Schema is valid', function () {
    pm.expect(tv4.validate(data1, schema)).to.be.true;
    pm.expect(tv4.validate(data2, schema)).to.be.true;
});

// 3) В ответе указаны коэффициенты умножения weight, напишите тесты по проверке правильности результата перемножения на коэффициент.
pm.environment.set("weight", 60);
pm.environment.get("weight");

// pm.test("coefficient_0.012_check", function () {
    var jsonData = pm.response.json();
    var req_weight = request.data.weight;
    var resp_weight = jsonData.daily_food;
    // pm.expect(req_weight*0,012).to.eql(resp_weight);
console.log("Req_weight =", +req_weight);
console.log("Resp_weight =", resp_weight)
// });
