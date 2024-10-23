type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

type ReadonlyConn = {
    readonly driver: string,
    readonly url: string
}

const conexao = (dados: Conn) => {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
}
