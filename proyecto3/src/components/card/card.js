import './card.css';

export const Card = (imageData)=>{
    
    const cardContainer = document.createElement('li');
    cardContainer.className = 'card';

    const image = document.createElement('img');
    image.src = imageData.urls.small;
    image.className = 'bookImage';

    const userImage = document.createElement('img');
    userImage.src = imageData.user.profile_image.medium;
    userImage.className = 'userImage';
    const diferentColour = `${Math.floor(Math.random()*16777215).toString(16)}`;
    userImage.style.border = `2px solid ${diferentColour}`;

    const likes = document.createElement('p');
    likes.textContent = `${imageData.likes} ♥️`;
    likes.className = 'numberLikes';

    const visit = document.createElement('a');
    visit.src= `${imageData.user.links.html} `;
    visit.className = 'anchorVisit';
    visit.textContent = 'Visitar';

    const imageOwner = document.createElement('p');
    imageOwner.className = 'image-owner';
    imageOwner.textContent = `${imageData.user.first_name} ${imageData.user.last_name}`;

    const date = document.createElement('p');
    date.className = 'date-image';
    const createdAt = new Date(imageData.created_at);
    const formatDate = createdAt.toLocaleDateString('es-ES');
    date.textContent=`${formatDate}📥`;

    cardContainer.append(image, userImage, imageOwner, date, likes, visit);

    cardContainer.addEventListener('mouseenter', () => {
        likes.style.display = 'block';
        visit.style.display = 'block';
    });

    cardContainer.addEventListener('mouseleave', () => {
        likes.style.display = 'none';
        visit.style.display = 'none';
    })

    return cardContainer

};