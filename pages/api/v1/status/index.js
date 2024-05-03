function status(request, response) {
  response.status(200).json({
    chave: "está funcionando ok!",
  });
}

export default status;
