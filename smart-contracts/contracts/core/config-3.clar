;; Config updated 2026-05-27T21:13:02Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u42)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
