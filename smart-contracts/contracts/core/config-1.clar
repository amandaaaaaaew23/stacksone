;; Config updated 2026-05-29T06:09:03Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u4)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
