;; Config updated 2026-05-30T21:55:27Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u60)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
