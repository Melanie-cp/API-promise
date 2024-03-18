const dataList = document.querySelector("#data-list");
const API_URL = "https://jsonplaceholder.typicode.com/photos";

const displayData = (data) => {
    const slicedData = data.slice(0, 20);
    slicedData.forEach((element) => {
        const li = document.createElement("li");
        li.textContent = element.title;
        dataList.appendChild(li);
    });
};

const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`La API falló - Código de error: ${response.status}`);
    }
    return response.json();
};

const delayMessage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Información Enviada");
        }, 3000);
    });
};

const getMessage = async () => {
    try {
        const message = await delayMessage();
        console.log(message);
    } catch (error) {
        console.log("Error al obtener el mensaje:", error);
    }
};

const getDataAndMessage = async () => {
    try {
        const data = await fetchData(API_URL);
        displayData(data);
        await getMessage();
    } catch (error) {
        console.log("Error:", error);
    }
};

getDataAndMessage();
