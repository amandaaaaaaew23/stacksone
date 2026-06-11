;; Config updated 2026-06-11T12:39:33Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u33)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
