let form = document.querySelector("form");
let name = document.getElementById("name");
let role = document.getElementById("role");
let bio = document.getElementById("bio");
let photo = document.getElementById("photo");

const userManager = {
    users: [],
    init: function () {
        form.addEventListener("submit", this.submitForm.bind(this));
    },
    submitForm: function (e) {
        e.preventDefault();
        this.addUser();
    },
    addUser: function () {
        this.users.push({
            name: name.value,
            role: role.value,
            bio: bio.value,
            photo: photo.value,
        });

        form.reset();
        this.renderUi();
    },
    renderUi: function () {
        document.querySelector(".baba").innerHTML = ""; // Clear the container
        this.users.forEach( (user, index) => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'bg-zinc-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center cursor-pointer'; // Added cursor-pointer

            // Add a click event listener to the card
            cardDiv.addEventListener('click', () => {
                this.removeUser(index);
            });

            const img = document.createElement('img');
            img.src = user.photo;
            img.alt = user.name;
            img.className = 'w-24 h-24 rounded-full object-cover border-4 border-zinc-700 mb-4';

            const heading = document.createElement('h3');
            heading.className = 'text-xl font-semibold text-white mb-1';
            heading.textContent = user.name;

            const jobTitle = document.createElement('p');
            jobTitle.className = 'text-sky-400 text-sm mb-3';
            jobTitle.textContent = user.role;

            const description = document.createElement('p');
            description.className = 'text-zinc-400 text-base leading-relaxed';
            description.textContent = user.bio;

            cardDiv.appendChild(img);
            cardDiv.appendChild(heading);
            cardDiv.appendChild(jobTitle);
            cardDiv.appendChild(description);

            document.querySelector(".baba").appendChild(cardDiv);
        });
    },
    removeUser: function (index) {
        this.users.splice(index, 1);
        this.renderUi();
    },
};
userManager.init();