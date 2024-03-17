export function formatDate(inputDate) {
    // Dividimos la fecha en año, mes y día
    const [year, month, day] = inputDate.split('-').map(Number);

    // Creamos una nueva fecha en formato "yyyy-mm-dd"
    const formattedDate = new Date(year, month - 1, day);

    // Verificamos si la fecha es válida
    if (isNaN(formattedDate.getTime())) {
        return "12/12/2100"; // Devolvemos null si la fecha es inválida
    }

    // Obtenemos el día, mes y año
    const formattedDay = formattedDate.getDate();
    const formattedMonth = formattedDate.getMonth() + 1; // Los meses empiezan desde 0, por lo que sumamos 1
    const formattedYear = formattedDate.getFullYear();

    // Formateamos la fecha como "dd/mm/yyyy"
    const result = `${formattedDay.toString().padStart(2, '0')}/${formattedMonth.toString().padStart(2, '0')}/${formattedYear}`;

    return result;
}
