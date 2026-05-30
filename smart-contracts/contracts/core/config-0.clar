;; Config updated 2026-05-30T18:33:28Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u46)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
