;; Config updated 2026-06-09T05:06:45Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u1)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
