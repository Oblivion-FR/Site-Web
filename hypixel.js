async function recherche(name) {
    console.log(name);
    let rep = await fetch(`https://api.mojang.com/users/profiles/minecraft/andinox`);
    console.log(rep.status);
}