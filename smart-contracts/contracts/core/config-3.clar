;; Config updated 2026-05-31T00:45:17Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u71)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
