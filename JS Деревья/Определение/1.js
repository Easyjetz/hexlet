/* Дерево состоит из узлов (вершин или нод, так как по-английски узел — это node) и рёбер между ними. 
Рёбра в реальности не существуют, они нужны лишь для того, чтобы визуализировать связь и, по необходимости,
 описать её. Узлы делятся на два типа: внутренние (те, у которых есть потомки) и листовые узлы 
 (те, у которых нет потомков). В случае файловой системы листовые узлы представлены файлами, 
 а внутренние — директориями.

У каждой вершины в дереве есть родитель (или предок). Единственным исключением является корневой узел — 
у него нет родителей, и именно с него начинается дерево. Количество потомков у любой внутренней вершины, 
в общем случае, может быть любым. Кроме того, в деревьях выделяют понятие глубины (depth), определяющей 
то, сколько шагов нужно пройти по вершинам от корневой, чтобы достичь текущей (той, на которую смотрим). 
Вершины на одной глубине с общим родителем называют братскими или сестринскими. */

// Определение

/*Количество способов, которыми можно описать деревья, бесконечно. 
Самый примитивный вариант — это вложенные массивы: */
[[1, 4], 2, [3, 8]];
//     *
//    /|\
//   * 2 *
//  /|   |\
// 1 4   3 8

// Ещё один способ определения основан на ассоциативных массивах(объектах в js)
{
    value: 5,
    children: [
      { value: 10 },
      { value: 100 },
      { value: 'nested', children: [/* ... */] }
    ]
}

/*
То самое понимание ООП, о котором так много говорят, как раз заключается в том, что код рассматривается 
с точки зрения типов, и вы их можете увидеть. Важно выделять их явно, а не анализировать по косвенным 
признакам — например, определение того, что за нода перед нами (какой у неё тип!), нужно делать через 
проверку type, а не через проверку наличия свойства children(тут уже обратиться к теории).
 */