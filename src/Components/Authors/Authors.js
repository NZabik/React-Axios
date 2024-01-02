import React, { useEffect, useState } from "react";
import './Authors.css';
import axios from 'axios';



function Author() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const headers = {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDQyMDc5NzIsImV4cCI6MTcwNDIxMTU3Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGJvb2thcGkuY29tIn0.I9lVWgzgORd6dUqlLlYX9IEg4O9Ma3Ok2OeLPjT1EEsoAg-kbTKtdBDo0yWsEZ8dFY9oCRrZ4O2_1zrkDfpspFExr8EH0RzKUt2Vdmou8t-lpGhP3JOpw17pvnq05RgrwP8ldBWdkpqe9QoyKpbA4ofHQaMT9jvBOt4b_FJcfqRtWQ6z4fBT9kuansb1U4L-gsXk-GCFZLZX5rY0I2tMZBsZWlo6rLa-vybRsHnrGKq7XK7Y-zz-9gXSZLazV064f9Incv25_m_5kSO3QNoWfSh0-TWwCoPglNesxZ91zaqF0FpQEdbzDE0_Ot9WnLCvUGyFQDlpNiRPq7zwhQe_rGt7UiuSEm2fJbdvatMDMjnoHcsmu2O8JPC-HFQiXh6ngRCK3sF2_4b4UyX0JVXhHpxjBQ8x5c8XsnIeTZ3aUTgbTgSyNyWUv8DRPErIgc8NPgHwUZJdDYLPSZR8okscCaNgwRB39Yylhg8at70Uhxm9nz7aL93IFgvsQ9MwWF7pEWNoUUIokVvVC_Tws3sG71K9H045LvwK7oUDsaqa0l7KQjNM_Pl4zxd5M9E8_vtGtSAIZuohSPDwF37BjrbKRHc0sRro5i85YSfAEirgSDPJXR2qDt_y6yU48oD0r_y3btFwJY-fWy3rEmQ8NkdnXH73LKwpSldBv56CQYIFz1E'
        };
        axios.get("http://localhost:8000/api/authors", { headers }).then((data) => {
            console.log(data);
            setPost(data.data);
        });
    }, []);

    return (
        <div className="Author">
            Auteurs
            {post.map((data) => {
                return (
                    <ul className="auteurs" key={data.id}>
                        <li>{"auteur id: " + data.id}</li>
                        <li>{"Prénom: " + data.firstName}</li>
                        <li>{"Nom: " + data.lastName}</li>
                        <ul>{data.books.map(function(d,id){ return (<li key={id}>{"Livre id: " + d.id + " / Titre: " + d.title + " / Quatrième: " + d.coverText}</li>)})}
                            
                        </ul>
                    </ul>
                );
            })}
        </div>
    );
}
export default Author;