// Напишем функцию, считающую количество вхождений каждого слова в предложение.

const content = 'cat dog cat eye see cat dog eye hah hah';

const getWordsCount = (content) => {
    const result = {};
    const words = content.split(' ');

    for (const word of words) {
        if (!result.hasOwnProperty(word)) {
            result[word] = 1;
        } else {
            result[word] += 1;
        }
    }
    return result;
}

console.log(getWordsCount(content));

