const GamerProfileCredential = (credentialSubject) => ({
  id: 1,
  circuitId: "credentialAtomicQuerySigV2",
  query: {
    allowedIssuers: ["*"],
    type: "GamerProfileCredential",
    context:
      "https://raw.githubusercontent.com/Turf-Tech/turf-issuer-credential/main/schemas/jsonld/gamer-profile-credential-v1.jsonld",
    credentialSubject,
  },
});

// See more off-chain examples
// https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/#equals-operator-1

export { GamerProfileCredential };
