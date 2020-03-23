export const exchange = async (filepath1, filepath2) => {
    // последовательно
    const data1 = await fs.readFile(filepath1);
    const data2 = await fs.readFile(filepath2);
  
    await fs.writeFile(filepath1, data2);
    await fs.writeFile(filepath2, data1);
  }

// BEGIN
export const exchange = async (filepath1, filepath2) => {
    // паралельно
    const reading1 = fs.readFile(filepath1);
    const reading2 = fs.readFile(filepath2);
    // приводим к данным 
    const [data1, data2] = await Promise.all([reading1, reading2]);
    // параллельная запись
    const writing1 = fs.writeFile(filepath1, data2);
    const writing2 = fs.writeFile(filepath2, data1);
    // хз...
    await Promise.all([writing1, writing2]);
  };
  // END