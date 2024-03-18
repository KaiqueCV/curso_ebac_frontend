namespace casting {
    let idade: any = 25;
    (<number>idade).toFixed();
    (<string>idade).length;
    (<string[]>idade).forEach(x => {
        console.log(x);
    })

    let nome: string = <unknown>35 as string;
    (<string>nome).length;
}