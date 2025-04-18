import './card.css';

export const Card = (imageData)=>{
    
    const cardContainer = document.createElement('li');
    cardContainer.className = 'card';

    const image = document.createElement('img');
    image.src = imageData.urls.small;
    image.className = 'bookImage';

    const userImage = document.createElement('img');
    userImage.src = imageData.user.profile_image.medium;
    userImage.className = 'userImage'

    
    const imageOwner = document.createElement('p');
    imageOwner.className = 'image-owner';
    imageOwner.textContent = `${imageData.user.first_name} ${imageData.user.last_name}`;

    const date = document.createElement('p');
    date.className = 'date-image';
    date.textContent = `${imageData.updated_at} 📥`;

    cardContainer.append(image, userImage, imageOwner, date);

    return cardContainer

};