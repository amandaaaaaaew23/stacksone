;; Config updated 2026-06-12T19:47:02Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u52)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
