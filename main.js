
async function obterInfoUsuarioGitHub () {
    const url = 'https://api.github.com/users/octocat';
    const user = await fetch(url).then( r => r.json())
    const repoUser = await fetch(user.repos_url).then(r => r.json());
    console.log(user.name);
    console.log(user.followers);
    console.log(repoUser);

}

obterInfoUsuarioGitHub().catch(e => console.log(e));
