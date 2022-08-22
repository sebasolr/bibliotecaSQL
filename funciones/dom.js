const getAutores = async () => {
    const { data } = await axios.get("http://localhost:3000/api/autores");
    $(".api/autores").html("");

    data.forEach((t) => {
      $(".autores").append(`
      <tr>
      <th scope="col">${t[0]} </th>
      <th scope="col">${t[1]} </th>
      <th scope="col">${t[2]} </th>
      <th scope="col">${t[3]} </th>
    </tr>
   `);
    });
  };