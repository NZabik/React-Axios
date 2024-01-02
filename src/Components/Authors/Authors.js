import React, { useEffect, useState } from "react";
import './Authors.css';
import axios from 'axios';



function Author() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const headers = {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDQyMDI0MjgsImV4cCI6MTcwNDIwNjAyOCwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGJvb2thcGkuY29tIn0.E0JkHQ8Wln3a_w6z2IKk60iN7VyZJERfoXON64Ix2SiADAPeh4li_7iIOK47-ZVTm1WgvQXWX6jJs9RmcPc73k1Uf9QwNfM2lyFqwDsafBqz4XNyFXvGh77HKb5LYkySpCPOKj4Gtix6pDujJ1_sTYKEf12VrwGqMvP5RKMKTvZ_6qfztdu7tud2TnXXAVyN4YaRRPDgf5bITNTPtzhDymAvClSlcyxTRShrzbEPnvnx9R0vSU_nt-L3BMM31Dpxqx-8VXpidEml9dY6bqX__N3TaCpBJ7c7cwYt7bxIw8Lum_QxQvTNlq0FmJGOFBcqkx-vqTnHOJLOtRsLJiST93vZp4eK2FbN5C3BADcAFaylxCVDLpungaKQWpHAUlzvoHgm9IG_SCpMH08m95QMTWW_VAXXr04xYTYVuNRgLXbtkAXdjA2htjqCki-RbUREReaOTb3TcRnlB35ONRx4RusjG1L7Xk9ysyNuGAbSHVH_U5jqUANPOU7DzU0KggJkacd880icxErEw0k9Cp78IEuW_um6VFdG2QKdU6ec9ydkWiW8ZZ8vyTsMYBcOCKMuiIKpuM8uzf8eJM_djcNxqihO1XjKB4H5N1SMOaBOdgzlZOdgUb0VMtrpSsgaFK-XL7hpMVRHZ6QdQeUFZZvscbn1kh3eBvHp7OxYzG9E8FE'
        };
        axios.get("http://localhost:8000/api/authors", { headers }).then((data) => {
            console.log(data);
            setPost(data.data);
        });
    }, []);

    return (
        <div className="Author">
             {post.map((item, i) => {
                return (
                    <div className="auteurs" key={i}>
                        <p>{"auteur id: " + item.id}</p>
                        <p>{"Prénom: " + item.firstName}</p>
                        <p>{"Nom: " + item.lastName}</p>
                        <p>{"Livre id: " + item.books.id + " / Titre: " + item.books.title + " / Quatrième: " + item.books.coverText}</p>
                        
                    </div>
                );
            })}
        </div>
    );
}
export default Author;