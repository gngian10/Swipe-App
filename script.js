/***************** User Info *****************/
const cards = document.querySelector(".cards");

const data = [
    {
        username: "Jefferson",
        role: "Journalist",
        interest: "1",
        distance: "4",
        imgSrc: "https://images.unsplash.com/photo-1548544149-4835e62ee5b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM2fHxwZXJzb258ZW58MHx8MHx8fDI%3D",
    },
    {
        username: "Emily",
        role: "Engineer",
        interest: "4",
        distance: "1",
        imgSrc: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxwZXJzb258ZW58MHx8MHx8fDI%3D",
    },
    {
        username: "Doruk",
        role: "Musician",
        interest: "2",
        distance: "4",
        imgSrc: "https://images.unsplash.com/photo-1579980645199-c2acb89ec42b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbiUyMG11c2ljaWFufGVufDB8fDB8fHwy",
    },
    {
        username: "Ana",
        role: "Actress",
        interest: "3",
        distance: "1",
        imgSrc: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBlcnNvbnxlbnwwfHwwfHx8Mg%3D%3D",
    },
];

function populateInfo() {
    data.forEach((person) => {
        const { username, role, interest, distance, imgSrc } = person;

        cards.innerHTML += `
            <article>
                <img
                    src=${imgSrc}
                    alt="person-${username}"
                />
    
                <div class="article__content">
                    <h2>${username}</h2>
    
                    <div>
                        <!-- briefcase icon -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            />
                            <path
                                d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"
                            />
                            <path
                                d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"
                            />
                            <path d="M12 12l0 .01" />
                            <path d="M3 13a20 20 0 0 0 18 0" />
                        </svg>
    
                        <span>${role}</span>
                    </div>
    
                    <div>
                        <!-- target icon -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#38ca78"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-target-arrow"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            />
                            <path
                                d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"
                            />
                            <path d="M12 7a5 5 0 1 0 5 5" />
                            <path d="M13 3.055a9 9 0 1 0 7.941 7.945" />
                            <path d="M15 6v3h3l3 -3h-3v-3z" />
                            <path d="M15 9l-3 3" />
                        </svg>
    
                        <span>
                            <strong>${interest}</strong>
                             ${
                                 Number(interest) > 1 ? "interests" : "interest"
                             } in commom
                        </span>
                    </div>
    
                    <div>
                        <!-- location icon -->
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            />
                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                            <path
                                d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                            />
                        </svg>
    
                        <span>
                            <strong>${distance}</strong>
                            ${Number(distance) > 1 ? "kilometers" : "kilometer"}
                            of distance
                        </span>
                    </div>
                </div>

                <button class="choice-btn nope" aria-label="reject option">
                    NOPE
                </button>
                <button class="choice-btn like" aria-label="accept option">
                    LIKE
                </button>
            </article>
        `;
    });
}

populateInfo();

/***************** Swipe Effect *****************/
const DECISION_THRESHOLD = 100;

let startX;
let card;
let isAnimating = false;
let tracedDistance = 0;

function startDrag(e) {
    if (isAnimating) return;

    card = e.target.closest("article");
    if (!card) return;

    startX = e.pageX ?? e.touches[0].pageX;

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onMoveEnd);

    document.addEventListener("touchmove", onMove);
    document.addEventListener("touchend", onMoveEnd);
}

function onMove(e) {
    isAnimating = true;

    const currentX = e.pageX ?? e.touches[0].pageX;
    tracedDistance = currentX - startX;

    const rotation = 10;
    const rotationDeg = tracedDistance / rotation;

    card.style.transform = `translateX(${tracedDistance}px) rotate(${rotationDeg}deg)`;

    const tOpacity = 72;
    const opacityAmount = Math.abs(tracedDistance) / tOpacity;

    const isRight = tracedDistance >= 0;

    const opacityEl = isRight
        ? card.querySelector(".choice-btn.like")
        : card.querySelector(".choice-btn.nope");

    opacityEl.style.opacity = opacityAmount;
}

function onMoveEnd(e) {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseup", onMoveEnd);

    document.removeEventListener("touchmove", onMove);
    document.removeEventListener("touchend", onMoveEnd);

    const decisionMade = Math.abs(tracedDistance) >= DECISION_THRESHOLD;

    if (decisionMade) {
        const isLiked = tracedDistance >= 0;

        card.classList.add(isLiked ? "gone-right" : "gone-left");
        card.addEventListener("transitionend", () => {
            card.remove();
        });
    } else {
        card.classList.add("reset-state");
        card.querySelectorAll(".choice-btn").forEach(
            (el) => (el.style.opacity = 0)
        );
    }

    card.addEventListener("transitionend", () => {
        card.removeAttribute("style");
        card.classList.remove("reset-state");

        tracedDistance = 0;
        isAnimating = false;
    });

    card.querySelectorAll(".choice-btn").forEach(
        (el) => (el.style.opacity = 0)
    );
}

document.addEventListener("mousedown", startDrag);
document.addEventListener("touchstart", startDrag, { passive: true });

/***************** Show tmr *****************/
const tmrEl = document.querySelector("header span");

function showTm() {
    const now = new Date();
    const mins = now.getMinutes();
    const hours = now.getHours();

    const formattedMins = mins.toString().padStart(2, "0");

    tmrEl.innerText = `${hours}:${formattedMins}`;
}

function showCurrentTm() {
    showTm();

    const now = new Date();
    const nextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    setTimeout(() => {
        showTm();

        setInterval(showTm, 60000);
    }, nextMinute);
}

showCurrentTm();
