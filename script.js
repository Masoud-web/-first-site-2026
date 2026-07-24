

// گرفتن عناصر صفحه
const input = document.getElementById("taskInput");
const addButton = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");


// اضافه کردن وظیفه جدید
addButton.addEventListener("click", addTask);


// اضافه کردن با دکمه Enter
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});


// تابع اضافه کردن آیتم
function addTask() {

    let text = input.value.trim();

    if (text === "") {
        alert("لطفاً یک متن وارد کنید");
        return;
    }


    // ساخت آیتم جدید
    const li = document.createElement("li");


    li.innerHTML = `
        <span class="task-text">${text}</span>

        <div>
            <button class="done-btn">
                انجام شد
            </button>

            <button class="delete">
                حذف
            </button>
        </div>
    `;


    // اضافه کردن به لیست
    taskList.appendChild(li);


    // پاک کردن ورودی
    input.value = "";


    // فعال کردن دکمه انجام شد
    const doneButton = li.querySelector(".done-btn");

    doneButton.addEventListener("click", function() {

        li.classList.toggle("completed");

    });



    // فعال کردن دکمه حذف
    const deleteButton = li.querySelector(".delete");

    deleteButton.addEventListener("click", function() {

        li.remove();

    });

}
