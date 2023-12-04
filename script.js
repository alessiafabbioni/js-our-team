/* Creare l’array di oggetti con le informazioni fornite. */

const team = 
[
    {
        'name' : 'Wayne Barnett', 
        'role' : 'Founder & CEO',
        'photo' : 'wayne-barnett-founder-ceo.jpg'
    },

    {
        'name' : 'Angela Caroll', 
        'role' : 'Chief Editor',
        'photo' : 'angela-caroll-chief-editor.jpg'
    },

    {
        'name' : 'Walter Gordon', 
        'role' : 'Office Manager',
        'photo' : 'walter-gordon-office-manager.jpg'
    },

    {
        'name' : 'Angela Lopez', 
        'role' : 'Social Media Manager',
        'photo' : 'angela-lopez-social-media-manager.jpg'
    },

    {
        'name' : 'Scott Estrada', 
        'role' : 'Developer',
        'photo' : 'scott-estrada-developer.jpg'
    },

    {
        'name' : 'Barbara Ramos', 
        'role' : 'Graphic Designer',
        'photo' : 'barbara-ramos-graphic-designer.jpg'
    },
];

/* Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto */
for (let i = 0; i < team.length; i++){
    const teams = team[i];
    console.log(teams);
    const listItem = `
    <li>
        <h4>${teams.name}</h4>
        <p>${teams.role}</p>
        <img src="img/${teams.photo}" />
    </li>
    `;




/* Stampa su DOM */
document.getElementById('list-item').innerHTML += (listItem);
}