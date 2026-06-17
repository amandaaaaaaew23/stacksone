;; Config updated 2026-06-17T08:12:06Z
(define-constant ERR-UNAUTHORIZED (err u401))
(define-data-var config-version uint u28)

(define-read-only (get-config-version)
  (ok (var-get config-version))
)
