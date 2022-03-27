/*
  В функцию personUpdate() приходят данные в виде объекта, содержащую некую информацию о человеке.
  Если этот человек является женщиной (свойство gender содержит значение 'female'), то из этого объекта
  необходимо удалить свойство age, если оно есть.
  Если этот человек является мужчиной (свойство gender содержит значение 'male'), следует убедиться,
  что в этом объекте есть свойство income. Если его нет, необходимо его добавить
  и присвоить начальное значение 100000.
  Объект после манипуляций следует вернуть в качестве результата работы функции.
*/
export function personUpdate(data) {
    if (data.gender === 'female') {
        delete data.age;
    }
    if (data.gender === 'male') {
        if (data.income == null) {
            data.income = 100000;
        }
    }
    return data;
}

/*
В функцию objectFieldsList приходят три объекта с различными полями, список которых заранее неизвестен.
Верните список названий этих полей в алфавитном порядке в виде массива строк.
*/
export function objectFieldsList(obj1, obj2, obj3) {
    return Object.keys({ ...obj1, ...obj2, ...obj3 }).sort();

    /* let result = [];
let arr = new Array(obj1, obj2, obj3);

for (let obj in arr) {
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      result.push(property.toString());
    }
  }
}
return result; */
}

/*
Верните в результате работы функции массив с клонами объекта obj.
При этом каждый клон должен дополнительно содержать поле id со своим порядковым номером в массиве.
Количество клонов - count.
*/
export function objectClone(obj, count) {
    let result = [];
    /* let counter = {
  id: 0,
} */

    for (let i = 0; i < count; i++) {
        result.push({ id: i, ...JSON.parse(JSON.stringify(obj)) });
        /* result.push({...counter, ...obj});
  counter.id++; */
    }
    return result;
}
