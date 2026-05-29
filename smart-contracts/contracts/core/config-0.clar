;; Config updated 2026-05-29T19:25:08Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u34)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
