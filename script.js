const markAsReadBtn = document.querySelector('.mark-all-as-read-button');
const numberOfUnreadNotifications = document.getElementById('number-of-unread-notifications')
const unreadNotifications = document.querySelectorAll('.unread'); 

numberOfUnreadNotifications.innerText = unreadNotifications.length;  

unreadNotifications.forEach(notification => {
    const indicator = document.createElement('span');
    indicator.classList.add('unread-indicator');
    notification.children[1].append(indicator);   
}) 
 
markAsReadBtn.addEventListener('click', () => {    
    unreadNotifications.forEach(notification => { 
        notification.classList.remove('unread');    
        numberOfUnreadNotifications.innerText = document.querySelectorAll('.unread').length;  
        const unreadIndicators = document.querySelectorAll('.unread-indicator');
        unreadIndicators.forEach(indicator => {
            indicator.remove();
        })   
    }) 
})  