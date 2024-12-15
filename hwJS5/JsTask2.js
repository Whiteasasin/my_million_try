//Завдання 2: Виконайте попереднє завдання але використовуючи конструкцію switch/case

const averageGrade = 97;

switch(true) {
    case averageGrade < 60 :
        console.log(`${averageGrade} - це незадовільна оцінка ,вчись краще !`);
    break

    case averageGrade == 60 || averageGrade <= 70 : 
        console.log(`${averageGrade} - це задовільна оцінка!`);
    break

    case averageGrade == 71 || averageGrade <= 80 : 
        console.log(`${averageGrade} - це добра оцінка!`);
    break

    case averageGrade == 81 || averageGrade <= 90 :
        console.log(`${averageGrade} - це Дуже добре !`);
    break

    case averageGrade == 91 || averageGrade <= 100 :
        console.log(`${averageGrade} - це Відмінно !`);
    break

    default :
    console.log(`${averageGrade} - опа, нахрюк`);
}